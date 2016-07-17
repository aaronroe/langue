defmodule Langue.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def up do
    create table(:users) do
      add :name, :string
      add :encrypted_password, :string
      add :email, :string

      timestamps
    end

    create index :users, [:email], unique: true
  end

  def down do
    drop table(:users)      
  end

end
