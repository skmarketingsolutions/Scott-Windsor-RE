import { execSync } from "child_process";

// Resolve any failed migration state so we can re-apply the fixed migration
try {
  console.log("Attempting to resolve failed migration state...");
  execSync(
    "npx prisma migrate resolve --rolled-back 20260405025755_init",
    { stdio: "inherit" }
  );
  console.log("Migration state resolved.");
} catch {
  // If it errors, the migration wasn't in a failed state — that's fine
  console.log("No failed migration to resolve (continuing).");
}

// Now apply all pending migrations
console.log("Running prisma migrate deploy...");
execSync("npx prisma migrate deploy", { stdio: "inherit" });
console.log("Migrations applied successfully.");
