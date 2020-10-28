# Migration `20200821174521-add-avatar-to-user`

This migration has been generated by angela-boyadjian at 8/21/2020, 5:45:21 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "avatar" text   ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200821173456-removed-default-value-of-descritpion..20200821174521-add-avatar-to-user
--- datamodel.dml
+++ datamodel.dml
@@ -3,17 +3,18 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model User {
   id       String    @default(cuid()) @id
   email    String    @unique
   password String
   username String    @unique
   description String?
+  avatar String?
   apiKey   String    @default(cuid()) @unique
   packages Package[]
 }
```

