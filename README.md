# LZ Marine — Site Estático

Site institucional da **LZ Marine — Escola Náutica & Aluguel de Embarcações**, em **HTML + CSS + JavaScript puro**. Zero build, zero dependências. É só subir.

## ✦ Estrutura (4 arquivos)

```
lz-marine-static/
├── index.html      ← página principal
├── styles.css      ← todos os estilos
├── script.js       ← interações (menu, scroll-reveal, form)
├── logo.png        ← logo da LZ Marine
└── favicon.png     ← ícone da aba do navegador
```

## ✦ Deploy no Vercel (1 minuto)

### Jeito mais rápido: arrastar e soltar

1. Acesse [vercel.com/new](https://vercel.com/new) e faça login
2. Procure por **"deploy without Git"** ou clique em **"Browse all templates"** → **"Other"**
3. **Arraste a pasta `lz-marine-static` inteira** (ou o `.zip`) na área de upload do Vercel
4. Clique em **Deploy**. Em 30 segundos seu site está no ar.

### Alternativa pela CLI

```bash
npm install -g vercel
cd lz-marine-static
vercel
```

Responda Enter em tudo. Pronto.

### Domínio personalizado

No painel do Vercel: **Settings → Domains** → adicione `lzmarinenautica.com.br` e siga as instruções DNS.

## ✦ Deploy em qualquer outro lugar

Como é HTML puro, **funciona em qualquer hospedagem**:

- **Netlify**: arraste a pasta em [app.netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages**: suba os arquivos pro repositório e ative Pages
- **Hospedagem tradicional (cPanel, Hostgator, etc)**: faça upload via FTP para a pasta `public_html/`
- **Cloudflare Pages**: conecte um repositório ou faça upload direto

## ✦ Testando localmente

Basta abrir `index.html` no navegador. Mas para uma experiência mais fiel (com fontes carregando corretamente), use um servidor local simples:

**Com Python:**
```bash
cd lz-marine-static
python3 -m http.server 8000
```
Abra `http://localhost:8000`

**Com Node:**
```bash
npx serve lz-marine-static
```

## ✦ Identidade visual

- **Tipografia**: Fraunces (serif editorial) + Outfit (sans premium) + JetBrains Mono (técnica) — via Google Fonts
- **Paleta extraída da logo**: navy `#0A2845` / `#051528` + dourado areia `#C9A04A` sobre branco-foam `#F5F7FA`
- **Animações**: scroll-reveal via IntersectionObserver, marquee infinito, bússola SVG decorativa no hero, textura noise sutil
- **100% responsivo** (mobile-first)

## ✦ Seções

1. **Header** sticky com menu mobile
2. **Hero** com bússola e métricas
3. **Serviços** (Habilitação Náutica)
4. **Marquee** "navegar sem limites ✦"
5. **Habilitação** — Motonauta + Arrais Amador
6. **Combos** — 4 opções com pricing
7. **Cursos individuais** — Arrais, Mestre EAD, Motonáutica
8. **Aulas particulares**
9. **Despachante Náutico**
10. **Sobre** — Missão, Visão, Valores
11. **Contato** — Formulário que envia para WhatsApp
12. **Footer** com mapa Google e links

## ✦ Dados preservados

Todos os preços, textos, missão/visão/valores, endereço, telefone — **idênticos** ao site original. Nada foi inventado.

- **WhatsApp**: (27) 99795-7083
- **Endereço**: R. Vitalino dos Santos Valadares, 131 — Santa Luíza, Vitória — ES, 29045-360
- **Combos**: R$ 1.219 / 1.299 / 2.318 / 3.297
- **Cursos**: R$ 700 / 689 / 829
- **Aulas particulares**: R$ 650/h e R$ 500/h
- **Despachante**: R$ 450 a 575
- **Taxa de inscrição**: R$ 150

## ✦ Como personalizar

- **Mudar WhatsApp**: busca/troca de `5527997957083` no `index.html` e `script.js`
- **Mudar preços**: edite diretamente no `index.html` (são valores em texto)
- **Adicionar Instagram real**: troque `href="#"` da tag de Instagram no footer
- **Trocar imagens**: as URLs do Unsplash podem ser substituídas por arquivos locais (coloque na pasta e use caminho relativo, ex: `imagens/lancha.jpg`)
