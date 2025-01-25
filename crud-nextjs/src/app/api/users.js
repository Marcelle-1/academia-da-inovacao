import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const users = await prisma.user.findMany();
      return res.status(200).json(users);
    }

    if (req.method === "POST") {
        const { name, email } = req.body;
      
        if (!name || !email) {
          return res.status(400).json({ error: "Nome e email são obrigatórios!" });
        }
      
        try {
          const newUser = await prisma.user.create({
            data: { name, email },
          });
          return res.status(201).json(newUser);
        } catch (error) {
          console.error("Erro ao criar usuário:", error); // Exibe erro no terminal
          return res.status(400).json({ error: "Erro ao criar usuário." });
        }
      }
      

    if (req.method === "DELETE") {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ error: "ID do usuário é obrigatório!" });
      }

      try {
        await prisma.user.delete({ where: { id: parseInt(id) } });
        return res.status(200).json({ message: "Usuário deletado com sucesso!" });
      } catch (error) {
        console.error("Erro ao deletar o usuário", error)
        return res.status(400).json({ error: "Erro ao deletar usuário. ID pode estar incorreto." });
      }
    }

    return res.status(405).json({ message: "Método não permitido" });

  } catch (error) {
    return res.status(500).json({ error: "Erro interno no servidor", details: error.message });
  }
}
