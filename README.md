# Fitnessis Store Catalog

## 🏪 Descripción
Sistema de gestión de catálogos de proveedores de moda fitness con evaluación colaborativa.

## 🚀 Características
- 📱 PWA instalable en Android/iOS
- 🎨 Galería de imágenes con sistema de evaluación
- 👥 Colaboración multi-usuario
- 🌐 Funcionalidad offline
- 📊 Generación de reportes
- 🔄 Sincronización inteligente

## 📁 Estructura del Proyecto
```
fitnessis-catalog/
├── stores/                 # Catálogos de tiendas
│   ├── ararasport/
│   │   ├── catalog/
│   │   │   ├── pre-trip/   # Fotos de internet
│   │   │   └── trip-2024-08/   # Fotos del viaje
│   │   ├── info.json
│   │   └── evaluations.json
├── assets/                 # Recursos estáticos
│   ├── css/
│   ├── js/
│   ├── images/
│   └── icons/
├── data/                   # Configuración y datos
├── tools/                  # Herramientas auxiliares
├── reports/                # Reportes generados
├── index.html              # Página principal
├── manifest.json           # PWA manifest
└── sw.js                  # Service Worker
```

## 🛠️ Instalación
1. Ejecuta el script de setup: `python setup.py`
2. Abre `index.html` en tu navegador
3. Para instalar en móvil: "Agregar a pantalla de inicio"

## 📱 Uso en Móvil
- Instala como PWA
- Activa "Modo Viaje" para diferenciar fotos
- Sube fotos desde la cámara
- Evalúa productos con estrellas y comentarios
- Sincroniza cuando tengas WiFi

## 👥 Colaboración
- Selecciona tu usuario al iniciar
- Cada evaluación se guarda por usuario
- Vista comparativa de evaluaciones
- Consenso visual cuando coinciden

## 🔧 Herramientas
- **Sync Tool**: Conversión JPG → WebP
- **Batch Organizer**: Organización masiva
- **Reports Generator**: Análisis de datos
- **Trip Mode**: Separación visual por fases

## 📊 Reportes
- Top tiendas mejor evaluadas
- Tendencias por usuario
- Análisis de consenso
- Estadísticas de uso

## 🎯 Próximas Funcionalidades
- [ ] Exportar selecciones
- [ ] Comparación lado a lado
- [ ] Tags personalizables
- [ ] Historial de cambios
- [ ] Notificaciones push

---
Desarrollado con ❤️ para optimizar la gestión de proveedores de moda fitness.
