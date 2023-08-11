### Programa para Administración de Procesos Electorales

#Informe de trabajo:
Con respecto al diseño, construcción, definición y elaboración del proyecto, el orden de porcentajes es el siguiente: Axel Soliz 35% Jayan Caceres 10% Berly Diaz 15% Leonardo Montoya 10% Jhonatan Uscca 10% Linghai Zhong 20%
## Propósito del proyecto:
Generar un gestor de votos dirigido hacia poblaciones estudiantiles en contexto de elecciones de autoridades con sistema de acceso por credenciales (usuario y contraseña) a la plataforma. El programa tiene la finalidad de simplificar los diversos procesos electorales internos de las universidades y/o instituciones educativas de los diversos niveles educativos, permitiendo también la personalización de la papeleta de votación al momento de su creación [Page 3].

Funcionalidades:
Diagrama de Casos de Uso:
RF-01 Iniciar Sesión: Permite iniciar sesión mediante credenciales: usuario y contraseña.

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/e1fc5594-4b32-4725-85cf-8c57e42bb703)

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/92583eaf-b770-49ef-96d0-1c18f0edee50)


RF-02 De usuario común a candidato: Permite generar un cambio de usuario común a candidato.

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/dd3a3412-5703-4213-b75b-659d9c0ab88e)

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/bab94e66-d576-4109-9b72-74ef47398468)


RF-03 Generar votación: Permite generar una votación.

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/305905ce-f3d6-449f-a9f7-36b782c4879b)

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/5eb643db-9c59-49c1-8485-5b37ea47e66e)


RF-04 Proceso de votación: Permite votar por un candidato.

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/d1a536ed-9f13-442f-ab22-fc0c1f3a5da5)

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/1969a041-121a-41a4-9852-f9538b56faba)


RF-05 Generar Resultados: El sistema tiene la capacidad de procesar los votos emitidos y generar los resultados de la elección de forma automática.

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/fedf02f7-9e31-4397-a86c-84e5dac05c36)

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/10634050-93ef-4a18-acf3-fb5241142c26)


RF-06 Acceso a Resultados: Los actores autorizados pueden acceder a los resultados de la elección y visualizar los candidatos y los votos recibidos por cada uno.

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/800d71bd-4677-4ec0-85ba-db8bb899a4af)

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/955aa244-c0c3-46e8-8407-5f4ac0537cc6)

# GUI:

# LOGIN:

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/fbf431c3-4102-49df-94c3-cccc254053ad)

# DE USUARIO COMÚN A CANDIDATO:

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/37a87b3f-2242-4b84-ac17-72a14daf3ea3)

# GENERAR VOTACIÓN:

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/1403fdd3-c951-4e7a-8449-041ed685ce83)

# VOTAR:

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/f7b9018f-70f0-4af3-a5ed-3aea344ff0ec)

# VER RESULTADOS:

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/e61a833b-ca13-4815-afcd-e965c43597bf)


# Modelo de Dominio: Diagrama de Clases y Módulos:

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/b1cf8915-9bfb-42de-8a1c-98cef42803f4)

# Arquitectura y Patrones: Diagrama de Componentes o Paquetes:

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/2d771b84-e513-45a4-8418-d5d81ea55f28)

# Login 

# Estilos de Programacion

Se utilizo el estilo 'microservices' en el sistema de login

![Alt text](https://github.com/Berly01/Eleccionador-Inador/blob/main/CAST%20VOTE/img/5.jpg)

Se utilizo el estilo 'passive aggressive' en el archivo CAST VOTE/login/cliente/login_sv/src/containers/LoginVoting.jsx en la funcion validateEmail()

![Alt text](https://github.com/Berly01/Eleccionador-Inador/blob/main/CAST%20VOTE/img/4.jpg)

Se utilizo el estilo 'things abstract' en el archivo CAST VOTE/login/backend/ConnectionBD.js

![Alt text](https://github.com/Berly01/Eleccionador-Inador/blob/main/CAST%20VOTE/img/6.jpg)

# SonarLint

Se utilizo el plugin SonarLint para la generacion de codigo limpio en todo el sistema de login

# Principios SOLID utilizados

Se utilizo el principio "S — Single Responsibility" en el archivo CAST VOTE/login/backend/ConnectionBDVoter.js

![Alt text](https://github.com/Berly01/Eleccionador-Inador/blob/main/CAST%20VOTE/img/1.jpg)

![Alt text](https://github.com/Berly01/Eleccionador-Inador/blob/main/CAST%20VOTE/img/2.jpg)

Se utilizo el principio "D — Dependency Inversion" en el archivo CAST VOTE/login/backend/ConnectionBD.js y en el archivo 
CAST VOTE/login/backend/ConnectionBDVoter.js

![Alt text](https://github.com/Berly01/Eleccionador-Inador/blob/main/CAST%20VOTE/img/3.jpg)

# Generar voto:


### Prácticas de codificación limpia aplicadas:

**Descripción**: Uso de constantes para evitar números mágicos o cadenas de texto sin contexto. Esto en el caso de prueba para generar datos y se entienda la funcionalidad.

**Fragmento de Código**:
```javascript
const nombresGrupos = ['Lista 1', 'Lista 2', 'Lista 3'];
```

### Estilos de Programación aplicados:

Es un componente de React que muestra una lista de candidatos agrupados por sus respectivos grupos. Los usuarios pueden seleccionar un candidato de cada grupo usando botones de opción (radio buttons). Los candidatos seleccionados se muestran luego en formato JSON para su envío.

1. **Uso de Estado**: El código utiliza el hook `useState` de React para gestionar el estado de los candidatos seleccionados.
   ```javascript
   const [nomElegidos, setNomElegidos] = useState({});
   ```

2. **Componentes Funcionales**: El código está escrito usando un componente funcional (`const App = () => {...}`), lo cual es un patrón común en el desarrollo moderno de React.

3. **Manejo de Eventos**: El código utiliza manejadores de eventos para actualizar el estado cuando se selecciona un botón de opción.
   ```javascript
   onChange={realizarCambio(nombresGrupos[indiceGrupo])}
   ```

4. **Procesamiento de Datos**: El código calcula el número total de candidatos usando la función `reduce`.
   ```javascript
   const totalElementos = grupos.reduce((total, grupo) => total + grupo.length, 0);
   ```

### Identificación del Estilo:

Dadas las características del código:

**Componentes Funcionales**: El uso de componentes funcionales en React se alinea con el **Estilo de Pipeline** donde las funciones (o componentes en este caso) toman una entrada y producen una salida sin efectos secundarios. Sin embargo, el uso del estado y los efectos secundarios (como el manejo de eventos) se desvía del estilo funcional puro.

### Conclusión:

Exhibe características del **Estilo de Pipeline**. Sin embargo, no se adhiere estrictamente a ningún estilo. En su lugar, combina varios paradigmas de programación típicos del desarrollo moderno de React.


### Principios SOLID aplicados:


**Descripción**: Principio de Responsabilidad Única (SRP) - `App` se encarga solo de mostrar una lista de opciones y recoger las elecciones del usuario. No está mezclando esta responsabilidad con otras tareas, como conectarse a una base de datos o manejar estilos.

![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/47cf0be9-9987-4477-b20b-891f49b346a1)

# Generate Result
Se utilizo el principio "S — Single Responsibility" en el archivo Result/geneter_results/src/App.js
![image](https://github.com/AxelSolis93/Eleccionador-Inador/assets/104087488/e6641051-38c0-4b6f-8112-4feecddaa368)

# Estilos de Programacion - AccessResults

## Monolitico:
Todo el codigo esta escrito en un solo archivo y exportado como un solo modulo. Esta es una caracteristica de este estilo, donde toda la logica esta contenida dentro de una sola unidad.
## Ejemplo:

![image](https://github.com/LeoUNSA/Eleccionador-Inador/assets/104027221/77308482-a9c9-4504-b139-e8e9b7ec34d4)

Todo el componente Resultados esta definido en un solo archivo.

## Pipeline:
El uso de este estilo implica el pasar la salida de una funcion como entrada para otra funcion, creando un 'pipeline' con las llamadas a funciones.
## Ejemplo:

![image](https://github.com/LeoUNSA/Eleccionador-Inador/assets/104027221/b00a085e-9c72-49e4-9e60-3de01947ea2a)

Aqui, la salida de la funcion obtenerResultadosReales() esta siendo pasada como argumento a la funcion setResultados(), creando un pipeline.

## Kick Forward: 
Este estilo esta caracterizado por pasar una función de devolución de llamada (callback) a otra función para que se ejecute después de completarse una operación. En JavaScript, esto se realiza comúnmente utilizando Promesas y la sintaxis async/await; then/catch.
## Ejemplos:

![image](https://github.com/LeoUNSA/Eleccionador-Inador/assets/104027221/7d856923-d88d-4478-8ddb-57d12b3037fa)

Aqui, la funcion setResultados(data) es una funcion de llamada (callback) que es pasada a then() y es ejecutada tras obtener la respuesta de la funcion obtenerResultadosReales().

# Practicas de Codificacion Legible - AccessResults

## Comentarios y documentacion:
Dado que este es un trabajo grupal, es importante el agregar comentarios que orienten a los demas desarrolladores a la hora de interactuar con otros modulos.

![image](https://github.com/LeoUNSA/Eleccionador-Inador/assets/104027221/84c5ce4b-44af-4966-948d-811f1b4c4c08)

## Evitar comentarios obvios:
Ahora, si bien los comentarios se agradecen a la hora de entender el codigo, evidentemente tampoco esta bien sobrecargar el codigo de comentarios triviales, ya que, en partes el codigo es bastante autoexplicativo, lo que haria que los comentarios estorbasen mas que otra cosa. Es en estas secciones que se evita colocar comentarios.

![image](https://github.com/LeoUNSA/Eleccionador-Inador/assets/104027221/cb493a9e-43f1-41d7-9cf2-0f7bf43ce225)


## Identacion consistente:
Para una adecuada lectura del codigo, es importante que la identacion sea facil de identificar y que sea cosntante a lo largo de todo el archivo.

![image](https://github.com/LeoUNSA/Eleccionador-Inador/assets/104027221/d21450bc-1a95-49b3-9f7b-391922832da3)

## Agrupacion del codigo:
A la hora de trabajar, el tener el codigo organizado en bloques de acuerdo a ciertos criterios es bastante util, ya que no hace falta desplazarse mucho en el archivo para realizar las modificaciones necesarias. En este caso, se separo el codigo en 2 bloques de funcionalidad. Uno obtiene los valores y el otro realiza la representacion grafica.

![image](https://github.com/LeoUNSA/Eleccionador-Inador/assets/104027221/768ee451-52ab-4e48-8dd8-bfc3e5b00e3d)

## Evitar el Deep Nesting:
Una mala practica es generar Deep Nesting en el codigo, es decir, que se realizen varias instrucciones seguidas que hagan la identacion irse mas y mas hacia dentro, dificultando la lectura del codigo y su posterior modificacion (en las otras imagenes ya se evidencia que eso no es un problema presente).

## Limitar la longitud de las lineas:
El limitar la longitud de cada linea hace que sea mas facil de leer el codigo, se recomienda que no sea de mas de 80 lineas, en este caso la linea con mas caracteres (sin contar comentarios) tiene solo 72.

![image](https://github.com/LeoUNSA/Eleccionador-Inador/assets/104027221/a47d0143-c2aa-4172-a170-35118cb3d8e8)

## Usar nombres significativos para variables y funciones.
El usar nombres autoexplicativos facilita el entendimiento del codigo para los otros desarrolladores y para uno mismo, ya que al tener las funciones y variables un nombre relacionado al trabajo que hacen, se puede seguir la linea de pensamiento del desarrollador que implemento el codigo incialmente con mas facilidad.

![image](https://github.com/LeoUNSA/Eleccionador-Inador/assets/104027221/7783cfd5-a258-44ff-afb4-041758253709)

# Principios Solid - AccessResults
Debido a la naturaleza del lenguaje en el que se esta trabajando el codigo (siendo react un lenguaje de tipo funcional), la aplicacion de los principios SOLID que estan principalmente presentes en la programacion orientada a objetos, no se puede realizar de la misma manera que en  estos ultimos. Sin embargo, de cierto modo estan presentes usando cierta abstraccion conceptual. Por ejemplo el SRP y ISP por la distribucion del proyecto en modulos esta inherentemente presente, ya que cada modulo realiza una tarea en especifico y seran posteriormente integrados.

# Comentarios adicionales:
Tras instalar la extension SonarLint esta no detecto mayores inconvenientes en el codigo implementado.
Esta version aun esta en pronto desarrollo, con lo que se espera hacer mejoras a futuro ademas de tener que juntar los modulos con los otros participantes del grupo.
Se priorizo el flujo principal de casos, que es lo que  esta implementado hasta el momento.
