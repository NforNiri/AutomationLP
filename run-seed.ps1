$env:STRAPI_TOKEN = (Get-Content "backend/.env" -ErrorAction SilentlyContinue | Select-String "STRAPI_TOKEN" | ForEach-Object { $_.ToString().Split('=')[1].Trim() })

if (-not $env:STRAPI_TOKEN) {
    Write-Host "❌ Could not find STRAPI_TOKEN in backend/.env"
    Write-Host "Please ensure you have created a token and saved it in backend/.env"
    exit 1
}

Write-Host "✅ Found STRAPI_TOKEN, running seed script..."
cd backend
node scripts/seed.js
