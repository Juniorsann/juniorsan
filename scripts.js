// Adicione animações ou interatividade com JavaScript aqui
// Exemplo de animação ao rolar para a seção 'Sobre'
document.addEventListener('scroll', function () {
    const sobre = document.querySelector('#sobre');
    if (window.scrollY >= sobre.offsetTop - 200) {
        sobre.classList.add('fade-in');
    }
});
// Função para mostrar a descrição do projeto
function showDescription(projectNumber) {
    const allProjects = document.querySelectorAll('.project-item');
    allProjects.forEach(project => {
        project.querySelector('.overlay').style.display = 'none'; // Esconde todas as descrições
        project.querySelector('.project-description').style.display = 'none'; // Esconde todos os textos
    });

    // Exibe a descrição do projeto clicado
    const selectedProject = document.getElementById(`project${projectNumber}`);
    selectedProject.querySelector('.overlay').style.display = 'flex'; // Exibe a sobrecarga
    selectedProject.querySelector('.project-description').style.display = 'flex'; // Exibe a descrição
}

// Função para esconder a descrição ao clicar no botão "Voltar"
function hideDescription(projectNumber) {
    const selectedProject = document.getElementById(`project${projectNumber}`);
    selectedProject.querySelector('.overlay').style.display = 'none'; // Esconde a sobrecarga
    selectedProject.querySelector('.project-description').style.display = 'none'; // Esconde a descrição
}
// Função para mostrar a descrição do sistema
function showAutomationDescription(systemNumber) {
    const allAutomations = document.querySelectorAll('.automation-item');
    allAutomations.forEach(automation => {
        automation.querySelector('.overlay').style.display = 'none'; // Esconde todas as descrições
        automation.querySelector('.automation-description').style.display = 'none'; // Esconde todos os textos
    });

    // Exibe a descrição do sistema clicado
    const selectedAutomation = document.getElementById(`automation${systemNumber}`);
    selectedAutomation.querySelector('.overlay').style.display = 'flex'; // Exibe a sobrecarga
    selectedAutomation.querySelector('.automation-description').style.display = 'flex'; // Exibe a descrição
}

// Função para esconder a descrição ao clicar no botão "Voltar"
function hideAutomationDescription(systemNumber) {
    const selectedAutomation = document.getElementById(`automation${systemNumber}`);
    selectedAutomation.querySelector('.overlay').style.display = 'none'; // Esconde a sobrecarga
    selectedAutomation.querySelector('.automation-description').style.display = 'none'; // Esconde a descrição
}



