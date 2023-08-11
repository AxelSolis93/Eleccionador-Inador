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



