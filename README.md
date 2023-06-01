# gh-repo-create-subcommand

Para crear ramas directamente de git utilizamos el comando:

    git switch -c "nombre del branch o rama"

Para saber en que rama estamos trabajando:

    git branch

Para guardar cambios en github usamos el comando:

    git push origin "nombre del branch o rama"

Para integrar los cambios en el flujo central de trabajo o rama principal:

1ro : cambiamos de branch al principal
    git switch main

2do: utilizamos el comando "merge" para guardar los cambios

    git merge "nombre del branch o rama"