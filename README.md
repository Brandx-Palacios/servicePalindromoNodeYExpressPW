# Servicio de Verificación de Palíndromos

Este proyecto implementa un servicio en Node.js con Express para verificar si una palabra es un palíndromo. El servicio acepta solicitudes POST con una palabra a ser evaluada y devuelve si la palabra es un palíndromo o no.

## Ejecución del servicio

1. Abre una terminal y navega hasta el directorio del proyecto.

2. Ejecuta el siguiente comando para iniciar el servicio:

   ```bash
   node palindromo-service.js   

3. Una vez iniciado, abre otra terminal y ejecuta el siguiente comando para enviar una solicitud POST al servicio y verificar si una palabra es un palíndromo. Asegúrate de reemplazar 'PALABRA A PROCESAR' con la palabra que deseas evaluar:

curl -X POST -H "Content-Type: application/json" --data-binary "{\"palabra\": \"PALABRA A PROCESAR\"}" http://localhost:3000/verificar-palindromo

Nota: El servicio también incluye una validación para identificar si la entrada es un número, en cuyo caso mostrará el mensaje "No se pudo identificar palabra".