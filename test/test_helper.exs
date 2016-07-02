ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Langue.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Langue.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Langue.Repo)

