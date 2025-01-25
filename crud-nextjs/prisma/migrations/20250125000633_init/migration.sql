-- CreateEnum
CREATE TYPE "Genero" AS ENUM ('feminino', 'masculino', 'outro', 'prefiro_nao_dizer');

-- CreateEnum
CREATE TYPE "EstadoCivil" AS ENUM ('Solteiro', 'Casado', 'Divorciado', 'outro');

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "idade" INTEGER,
    "genero" "Genero" NOT NULL,
    "estadoCivil" "EstadoCivil" NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_cpf_key" ON "usuario"("cpf");
