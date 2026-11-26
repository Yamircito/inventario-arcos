# Control de Inventario de Arcos · V0.6.5 (PWA)

Aplicación web estática para publicar en **GitHub Pages**. Conserva las funciones
operativas de V0.6.2 (157 materiales, arcos, inventario, reservas, pedidos con
firmas, Excel, respaldos y modo oscuro).

## Archivos de esta carpeta

- `index.html`: aplicación completa; incluye el generador Excel existente.
- `manifest.webmanifest`: instalación como aplicación.
- `sw.js`: permite abrir la aplicación sin conexión **después** de visitar una vez
  la página por HTTPS y dejar cargar los recursos.
- `icons/`: iconos de instalación para iPhone, Android y escritorio.
- `.nojekyll`: indica a GitHub Pages que no procese el sitio con Jekyll.

**Importante:** publica estos archivos en la **raíz** del repositorio,
no la carpeta contenedora ni el ZIP.

## Publicar con GitHub Desktop (Mac o Windows)

1. Abre **GitHub Desktop** e inicia sesión en tu cuenta GitHub.
2. Menú **File > New repository...**.
3. En **Name**, escribe `inventario-arcos` y elige la carpeta local.
4. Pulsa **Create repository**.
5. En GitHub Desktop, **Repository > Show in Finder** (Mac) o
   **Show in Explorer** (Windows).
6. En Finder (Mac), pulsa **Cmd + Shift + .** para mostrar archivos ocultos
   como `.nojekyll` y `.gitignore`. Copia **el contenido** de esta carpeta
   dentro del repositorio creado; `index.html` debe quedar al mismo nivel
   que `README.md`. No copies solamente el archivo ZIP ni una subcarpeta.
7. Regresa a GitHub Desktop. En **Changes**, verás los archivos agregados.
8. Escribe como Summary: `PWA V0.6.5 - correcciones de botones y fecha`.
9. Pulsa **Commit to main** y luego **Publish repository**.
10. En **Publish repository**, elige tu cuenta y asegúrate de que el repositorio
    sea **público** si utilizas GitHub Free (desmarca “Keep this code private”).
11. Abre el repositorio desde **View on GitHub**.
12. En GitHub web: **Settings > Pages > Build and deployment**.
13. **Source:** `Deploy from a branch`.
14. **Branch:** `main` y carpeta `/(root)`; pulsa **Save**.
15. En la misma sección Pages aparecerá la dirección web cuando se publique.

Para la cuenta `Yamircito` y nombre `inventario-arcos`, la URL prevista es:
https://yamircito.github.io/inventario-arcos/

## Instalar en iPhone

1. Abre la URL publicada en **Safari**. No abras `index.html` como archivo local.
2. Usa **Compartir > Agregar a Inicio**.
3. Activa **Abrir como app web** si aparece la opción.
4. Confirma **Agregar**.
5. Abre el icono **Inventario Arcos** desde la pantalla de inicio.

Para comprobar el modo sin conexión, abre y deja cargar la aplicación una vez
con internet; luego activa modo avión y vuelve a abrirla. La primera carga
siempre requiere conexión.

## Migración de V0.6.2

Antes de cambiar, descarga **Respaldos > Respaldo completo** desde la aplicación
anterior. Abre la nueva PWA y usa **Respaldos > Restaurar respaldo**.

El almacenamiento del navegador **no se comparte** entre `file://` y HTTPS,
ni entre dispositivos. La PWA sigue sin base de datos remota ni sincronización.
No se deben subir respaldos, nombres de responsables ni documentos firmados
al repositorio público.

## Actualizar a versiones posteriores

Reemplaza únicamente los archivos públicos de la app; en GitHub Desktop haz
**Commit** y después **Push origin**. El navegador obtendrá la actualización
al reconectarse y recargar. Conserva un respaldo JSON antes de cambios importantes.

## Actualización V0.6.5 (24-nov-2026)

- Los botones **Colapsar** e **Ir arriba** permanecen visibles debajo de la
  barra de navegación mientras recorres una categoría abierta. Al cambiar a
  otra categoría, solo se muestran los botones de la correspondiente.
- El campo **Fecha** respeta las dimensiones del formulario en Safari/iPhone,
  sin ampliar su columna fuera de la tarjeta.
- Se conserva la compatibilidad con respaldos V0.6.0–V0.6.3, las 157 referencias,
  el modo oscuro y el Excel con dashboard y firmas.
- El Service Worker usa una nueva versión de caché para instalar las correcciones.

**Para actualizar un repositorio ya publicado con GitHub Desktop:** reemplaza los
archivos del repositorio por los de este ZIP, haz **Commit to main** y luego
**Push origin**. La dirección de GitHub Pages no cambia. En iPhone, recarga la
PWA con conexión a internet y reiníciala si mantuvo la versión anterior en caché.

**Haz un respaldo completo JSON** antes de actualizar. No se deben subir datos
personales, respaldos operativos o archivos firmados al repositorio.

## Limitaciones conocidas

- GitHub Pages publica el **código** como web pública; el acceso no está
  protegido con inicio de sesión.
- El inventario y los movimientos permanecen **solo en el dispositivo/navegador**.
- Safari en iPhone necesita pruebas adicionales para confirmar que las descargas
  XLSX y los dos lienzos de firma funcionen como se espera.
- El Service Worker solo guarda archivos estáticos, no inventarios ni firmas.
- La aplicación PWA no sustituye a un backend ni ofrece colaboración en tiempo real.

## V0.6.5 — Captura directa sin bloqueos

- En Captura de arco, **Tengo** acepta cantidades superiores a las existencias libres.
- El sistema usa primero material libre, registra automáticamente la diferencia
  como entrada física, y reserva solo hasta la cantidad de **Necesarios**.
- Si hay sobrante, permanece disponible para los demás arcos.
- Al reducir **Tengo**, se libera la reserva, pero no se borra el material físico.
- Las cantidades se confirman al salir del campo o pulsar **Listo/Enter**;
  esto evita registrar valores parciales mientras se escribe en iPhone.
- Cuando cambias **Necesarios**, la reserva se ajusta a la nueva necesidad
  sin inventar stock.
- Conserva los datos locales y los respaldos V0.6.0–V0.6.4.

**Haz un respaldo completo antes de publicar.** El inventario sigue almacenado
localmente en cada dispositivo. Las entradas incorrectas se pueden corregir con
Inventario general → Ajustar inventario, registrando el motivo.
