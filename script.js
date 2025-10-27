// Espera o DOM carregar antes de executar o script
document.addEventListener("DOMContentLoaded", () => {

    // --- ATUALIZAR ANO NO RODAPÉ ---
    // (Funciona em todas as páginas)
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- NAVEGAÇÃO MOBILE (MENU HAMBURGUER) ---
    // (Funciona em todas as páginas)
    const navToggle = document.querySelector(".nav-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (navToggle && mainNav) {
        navToggle.addEventListener("click", () => {
            mainNav.classList.toggle("active");
            const isExpanded = mainNav.classList.contains("active");
            navToggle.setAttribute("aria-expanded", isExpanded);
        });
    }

    // --- LÓGICA DO MODAL DE DOAÇÃO ---
    // (Funciona em todas as páginas)
    const modal = document.getElementById("donationModal");
    const donationProjectSpan = document.getElementById("donationProject");
    const closeModalBtn = document.querySelector(".modal-close");

    // Botões que abrem o modal (busca em todas as páginas)
    const openModalBtns = document.querySelectorAll(
        "#donateBtn, #heroDonate, .donate[data-project]"
    );

    const openModal = (projectName) => {
        if (modal && donationProjectSpan) {
            donationProjectSpan.textContent = projectName || "Causa Geral";
            modal.classList.add("active");
            modal.setAttribute("aria-hidden", "false");
        }
    };

    const closeModal = () => {
        if (modal) {
            modal.classList.remove("active");
            modal.setAttribute("aria-hidden", "true");
        }
    };

    openModalBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener("click", (e) => {
                e.preventDefault(); 
                const project = btn.dataset.project;
                openModal(project);
            });
        }
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeModal);
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // --- LÓGICA DE FORMULÁRIOS ---

    // 1. Formulário de Doação (no Modal)
    const donateForm = document.getElementById("donateForm");
    const donationResult = document.getElementById("donationResult");

    if (donateForm && donationResult) {
        donateForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const amount = donateForm.querySelector("input[name='amount']").value;
            donationResult.textContent = `Obrigado por doar R$${amount}!`;
            donationResult.classList.remove("hidden");
            donateForm.reset();

            setTimeout(() => {
                closeModal();
                donationResult.classList.add("hidden");
            }, 2500);
        });
    }

    // 2. Formulário de Contato (só existe no index.html)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // (Substitua window.alert por um modal customizado em produção)
            alert("Obrigado pela sua mensagem! Entraremos em contato em breve.");
            contactForm.reset();
        });
    }

    // 3. Formulário de Cadastro (só existe no cadastro.html)
    const cadastroForm = document.getElementById("cadastroForm");
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Verifica se o formulário é válido (HTML5 validation)
            if (cadastroForm.checkValidity()) {
                // (Substitua window.alert por um modal customizado em produção)
                alert("Cadastro realizado com sucesso! Obrigado por se juntar a nós.");
                cadastroForm.reset();
            } else {
                // (Substitua window.alert por um modal customizado em produção)
                alert("Por favor, corrija os campos inválidos.");
            }
        });
    }

    // --- MÁSCARAS DE INPUT (só se aplica ao cadastro.html) ---

    const cpfInput = document.getElementById("cpf");
    const telefoneInput = document.getElementById("telefone");
    const cepInput = document.getElementById("cep");

    // Máscara de CPF: 000.000.000-00
    if (cpfInput) {
        cpfInput.addEventListener("input", (e) => {
            let value = e.target.value.replace(/\D/g, ""); // Remove não-números
            value = value.slice(0, 11); // Limita a 11 dígitos
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            e.target.value = value;
        });
    }

    // Máscara de Telefone: (00) 00000-0000
    if (telefoneInput) {
        telefoneInput.addEventListener("input", (e) => {
            let value = e.target.value.replace(/\D/g, "");
            value = value.slice(0, 11); // Limita a 11 dígitos (com 9)
            
            if (value.length > 10) {
                // Celular (00) 00000-0000
                value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
            } else if (value.length > 6) {
                // Fixo (00) 0000-0000
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)$/, "($1");
            }
            e.target.value = value;
        });
    }

    // Máscara de CEP: 00000-000
    if (cepInput) {
        cepInput.addEventListener("input", (e) => {
            let value = e.target.value.replace(/\D/g, "");
            value = value.slice(0, 8); // Limita a 8 dígitos
            value = value.replace(/(\d{5})(\d)/, "$1-$2");
            e.target.value = value;
        });
    }

});
