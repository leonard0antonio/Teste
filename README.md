import { test, expect } from '@playwright/test';

// 2. Criando regras antes de todo código
let usuario: string;
let senha: string;
let nomeUsuario: string;

test.beforeAll("Registrar dados do usuário", async () => {
    usuario = "Leonardo321";
    senha = "leo321";
    nomeUsuario = "Leonardo antonio122";
});

// 3. Criar execução para antes de cada teste
test.beforeEach("Realizar login", async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    
    // Preenchendo os campos de login
    await page.locator(".login").locator("[name='username']").fill(usuario);
    await page.locator(".login").locator("[name='password']").fill(senha);
    
    // Clicando no botão de Log In
    await page.getByRole("button", { name: "Log In" }).click();

    // Validando login
    await expect(page.getByText("Welcome")).toBeVisible();
});

// Bloco de teste de exemplo para que a execução aconteça
test("Validar acesso à conta", async ({ page }) => {
    // Como o login já foi feito no beforeEach, você já está logado aqui.
    // Aqui você continuaria com os passos específicos do seu teste.
    console.log(`Teste em execução para o usuário: ${nomeUsuario}`);
});
