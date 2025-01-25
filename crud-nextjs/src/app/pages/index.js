import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, reset } = useForm();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  const onSubmit = async (data) => {
    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    reset();
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await fetch("/api/users", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchUsers();
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-4">Cadastro de Usuários</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="mb-6 bg-gray-100 p-4 rounded-lg">
        <input
          {...register("name")}
          placeholder="Nome"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          {...register("email")}
          type="email"
          placeholder="E-mail"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Adicionar Usuário
        </button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center bg-white p-3 mb-2 shadow rounded">
            <div>
              <p className="font-bold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <button
              onClick={() => deleteUser(user.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
