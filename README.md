# Marketplace App — Base Template

Proyecto base para el marketplace de compra-venta entre usuarios. Cada integrante clona este repo y lo adapta para su modulo.

**Tipo de proyecto:** Marketplace

## Stack tecnologico

- **Framework:** Next.js (App Router) + TypeScript
- **Estilos:** Tailwind CSS + shadcn/ui
- **Autenticacion:** Clerk
- **Base de datos:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **State management:** Zustand
- **Data fetching:** TanStack Query + Axios
- **Formularios:** React Hook Form + Zod
- **Deploy:** Vercel

## Setup local

```bash
# 1. Clonar el repo
git clone <url-del-repo>
cd marketplace-app

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Completar las variables en .env.local

# 4. Generar el cliente de Prisma
npx prisma generate

# 5. Ejecutar migraciones
npx prisma migrate dev

# 6. Iniciar el servidor de desarrollo
npm run dev
```

## Estructura del proyecto

## Comandos utiles

```bash
npm run dev              # Iniciar servidor
npm run smoke            # Tests de humo
npx prisma generate     # Generar cliente Prisma
npx prisma studio      # Abrir UI para administrar BD
```

> **Nota:** Después de instalar dependencias (`npm install`) o modificar `schema.prisma`, correr `npx prisma generate`.

## Variables de entorno

Ver `.env.example` para lista completa. Variables clave para Payments App:

- `DATABASE_URL` — PostgreSQL connection string
- `SERVICE_TOKEN_SECRET` — Token para autenticación inter-app
- `MP_ACCESS_TOKEN` — Token de MercadoPago (si usas integración real)

## Payments App (Rocco Paoloni) 🔥

Este repositorio incluye un **scaffold COMPLETO** para la "Payments App" que maneja todo el flujo de pagos.

### ✅ Características

- **Modelos Prisma**: Payment, Settlement, Payout, Refund, MpWebhookEvent, OutboundCallLog
- **API REST versionada** (`/api/v1/payments/*`) con validación de seguridad
- **Servicios**: MercadoPago, cálculo de settlements, cliente inter-app
- **Hooks React**: `usePayments`, `useCreatePayment` con TanStack Query y caching
- **Componentes UI**: Formularios, tablas, validaciones, toasts
- **Seguridad**: X-Service-Token, idempotencia, auditoría de llamadas
- **Tests de humo**: `npm run smoke`
- **Tipos TypeScript**: `src/types/payments.ts`

### 📚 Documentación (12 archivos MD)

**[Empieza aquí → `/referencias/README.md`](referencias/README.md)**

**Para principiantes**:

1. [01-intro](referencias/01-intro.md) — Qué es, conceptos clave
2. [02-setup](referencias/02-setup.md) — Configuración local
3. [12-paso-a-paso](referencias/12-ejemplo-paso-a-paso.md) — Tu primer pago (30 min)

**Quick start**:

```bash
npm install
npx prisma generate
npx prisma migrate dev --name add_payments_core
npm run dev           # Terminal 1
npm run smoke         # Terminal 2
```

Luego: `http://localhost:3000/payments`
