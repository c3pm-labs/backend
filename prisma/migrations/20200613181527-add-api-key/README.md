# Migration `20200613181527-add-api-key`

This migration has been generated by clement.dubois at 6/13/2020, 6:15:27 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "apiKey" text  NOT NULL ;

CREATE UNIQUE INDEX "User.apiKey" ON "public"."User"("apiKey")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200509174220-add-username-field..20200613181527-add-api-key
--- datamodel.dml
+++ datamodel.dml
@@ -3,13 +3,14 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 model User {
   id       String @default(cuid()) @id
   email    String @unique
   password String
   username String @unique
+  apiKey   String @default(cuid()) @unique
 }
```


