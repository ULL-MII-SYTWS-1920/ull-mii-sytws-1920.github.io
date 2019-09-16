
Despúes de que hayamos definido las clases de nodos del AST y hayamos añadido `evaluate` como método
en las clases creadas nos encontramos con que `bin/eggvm` deja de funcionar. Esto es así porque:

1. `bin/eggc prog.egg` produce como salida un JSON `prog.egg.evm` conteniendo el mapa/hash del árbol descrita en JSON. En JSON no se puede describir que un objeto pertenece a una cierta clase. Ni siquiera existe el concepto de clase.
2. Cuando ejecutamos `bin/eggvm prog.egg.evm` falla porque la estructura del JSON es un mapa y ahora `evaluate` es un método
definido en las clases de nodos `VALUE`, `WORD`y `APPLY`

**Solución**

Escriba una función `json2AST` que convierta la estructura de datos
plana en un AST en los que cada nodo pertenece a la clase correspondiente.
Modifique la función `runFromEVM` que ejecuta el código de la máquina virtual para que siga funcionando. 


