defmodule Langue.User do
  use Langue.Web, :model

  schema "users" do
    field :name, :string
    field :password, :string, virtual: true
    field :encrypted_password, :string
    field :email, :string

    timestamps
  end

  @required_fields ~w(password email)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
    |> unique_constraint(:email)
    |> validate_format(:email, ~r/@/)
    |> validate_length(:password, min: 8)
    |> put_change(:encrypted_password, hash_password(params["password"]))
  end

  def validate_login(user, password) do
    case user do
      nil -> :error
      _ -> case Comeonin.Bcrypt.checkpw(password, user.encrypted_password) do
        true -> :ok
        false -> :error
      end
    end
  end

  defp hash_password(password) do
    Comeonin.Bcrypt.hashpwsalt(password)
  end
end
