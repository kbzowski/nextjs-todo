# Aplikacja Todo List

Aplikacja szkoleniowa do zarządzania zadaniami, stworzona w Next.js 16 z wykorzystaniem React 19. Projekt został zaprojektowany jako materiał edukacyjny dla studentów informatyki, prezentujący nowoczesne podejście do tworzenia aplikacji webowych.

## Wymagania systemowe

- Node.js w wersji 24 lub nowszej
- npm w wersji 10 lub nowszej

## Instalacja

Sklonuj repozytorium i zainstaluj zależności:
```bash
git clone https://github.com/kbzowski/nextjs-todo.git
cd nextjs-todo
npm install
```

## Struktura projektu

```
nextjs-todo/
├── app/                          # Główny katalog aplikacji (App Router)
│   ├── actions.ts                # Server Actions dla operacji CRUD
│   ├── layout.tsx                # Główny layout aplikacji
│   ├── page.tsx                  # Strona główna z listą zadań
│   ├── page.module.css           # Style dla strony głównej
│   ├── globals.css               # Globalne style CSS
│   ├── add/                      # Moduł dodawania zadań
│   │   ├── page.tsx              # Strona z formularzem dodawania
│   │   └── add.module.css        # Style strony
│   ├── edit/[id]/                # Moduł edycji zadań
│   │   ├── page.tsx              # Strona z formularzem edycji
│   │   └── edit.module.css       # Style strony
│   └── components/               # Komponenty React
│       ├── TodoItem.tsx          # Komponent pojedynczego zadania
│       ├── TodoForm.tsx          # Wspólny formularz dla add/edit
│       └── TodoForm.module.css   # Style formularza
├── lib/                          # Biblioteki pomocnicze
│   ├── prisma.ts                 # Singleton klienta Prisma
│   ├── formData.ts               # Funkcje pomocnicze dla formularzy
│   └── formatDate.ts             # Formatowanie dat
├── prisma/                       # Konfiguracja bazy danych
│   ├── schema.prisma             # Schema bazy danych
│   ├── migrations/               # Migracje bazy danych
│   └── dev.db                    # Baza danych SQLite
├── package.json                  # Zależności projektu
├── tsconfig.json                 # Konfiguracja TypeScript
├── eslint.config.mjs             # Konfiguracja ESLint
└── next.config.ts                # Konfiguracja Next.js
```

## Technologie

### Framework i biblioteki
- **Next.js 16.0.1** - framework React z obsługą Server-Side Rendering
- **React 19.2.0** - biblioteka do budowy interfejsów użytkownika
- **TypeScript 5** - typowany nadzbiór JavaScript

### Baza danych
- **Prisma ORM 6.19.0** - nowoczesny ORM dla Node.js i TypeScript
- **SQLite** - lekka, plikowa baza danych

### Walidacja
- **Zod 4** - biblioteka do walidacji schematów TypeScript

### Narzędzia deweloperskie
- **ESLint 9** - narzędzie do analizy statycznej kodu
- **CSS Modules** - modularyzacja stylów CSS

## Funkcjonalności

### Zarządzanie zadaniami
- Przeglądanie listy zadań z datą utworzenia
- Dodawanie nowych zadań
- Edycja istniejących zadań
- Oznaczanie zadań jako wykonane/niewykonane
- Usuwanie zadań

## Komendy deweloperskie

### Uruchomienie serwera deweloperskiego
```bash
npm run dev
```

### Budowanie wersji produkcyjnej
```bash
npm run build
```

### Uruchomienie wersji produkcyjnej
```bash
npm start
```

### Sprawdzenie kodu ESLint

```bash
npm run lint
```

### Weryfikacja typów TypeScript
```bash
npx tsc --noEmit
```

### Utworzenie migracji bazy danych
```bash
npx prisma migrate dev
```

### Wygenerowanie klienta Prisma
```bash
npx prisma generate
```
