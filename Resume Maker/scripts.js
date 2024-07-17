// script.js

document.getElementById('add-skill-button').addEventListener('click', function() {
    addInputField('skills-container', 'skill-input', 'skills[]');
});

document.getElementById('add-education-button').addEventListener('click', function() {
    addTextAreaField('education-container', 'education[]');
});

document.getElementById('add-experience-button').addEventListener('click', function() {
    addTextAreaField('experience-container', 'experience[]');
});

document.getElementById('add-project-button').addEventListener('click', function() {
    addTextAreaField('projects-container', 'projects[]');
});

document.getElementById('add-certification-button').addEventListener('click', function() {
    addTextAreaField('certifications-container', 'certifications[]');
});

document.getElementById('add-language-button').addEventListener('click', function() {
    addTextAreaField('languages-container', 'languages[]');
});

document.getElementById('add-reference-button').addEventListener('click', function() {
    addTextAreaField('references-container', 'references[]');
});

document.getElementById('design').addEventListener('change', function() {
    generatePreview();
});

function addInputField(containerId, className, name) {
    const container = document.getElementById(containerId);
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = className;
    newInput.name = name;
    newInput.required = true;
    container.appendChild(newInput);
    newInput.addEventListener('input', generatePreview); // Update preview on input change
}

function addTextAreaField(containerId, name) {
    const container = document.getElementById(containerId);
    const newTextArea = document.createElement('textarea');
    newTextArea.name = name;
    newTextArea.required = true;
    container.appendChild(newTextArea);
    newTextArea.addEventListener('input', generatePreview); // Update preview on input change
}

function generatePreview() {
    const formData = new FormData(document.getElementById('resume-form'));
    const preview = document.getElementById('resume-preview');
    const design = formData.get('design');

    let resumeHTML;
    switch (design) {
        case 'modern':
            resumeHTML = generateModernPreview(formData);
            preview.className = 'resume-preview modern';
            break;
        case 'classic':
            resumeHTML = generateClassicPreview(formData);
            preview.className = 'resume-preview classic';
            break;
        default:
            resumeHTML = generateDefaultPreview(formData);
            break;
    }

    preview.innerHTML = resumeHTML;
}

function generateDefaultPreview(formData) {
    let skills = '';
    formData.getAll('skills[]').forEach(skill => {
        skills += `<li>${skill}</li>`;
    });

    let education = '';
    formData.getAll('education[]').forEach(edu => {
        education += `<li>${edu}</li>`;
    });

    let experience = '';
    formData.getAll('experience[]').forEach(exp => {
        experience += `<li>${exp}</li>`;
    });

    let projects = '';
    formData.getAll('projects[]').forEach(proj => {
        projects += `<li>${proj}</li>`;
    });

    let certifications = '';
    formData.getAll('certifications[]').forEach(cert => {
        certifications += `<li>${cert}</li>`;
    });

    let languages = '';
    formData.getAll('languages[]').forEach(lang => {
        languages += `<li>${lang}</li>`;
    });

    let references = '';
    formData.getAll('references[]').forEach(ref => {
        references += `<li>${ref}</li>`;
    });

    const resumeHTML = `
        <h2>${formData.get('name')}</h2>
        <p>${formData.get('contact')}</p>
        <h3>Summary</h3>
        <p>${formData.get('summary')}</p>
        <h3>Skills</h3>
        <ul>${skills}</ul>
        <h3>Education</h3>
        <ul>${education}</ul>
        <h3>Experience</h3>
        <ul>${experience}</ul>
        <h3>Projects</h3>
        <ul>${projects}</ul>
        <h3>Certifications</h3>
        <ul>${certifications}</ul>
        <h3>Languages</h3>
        <ul>${languages}</ul>
        <h3>References</h3>
        <ul>${references}</ul>
    `;

    return resumeHTML;
}

function generateModernPreview(formData) {
    // Implement a different style for modern design
    let skills = '';
    formData.getAll('skills[]').forEach(skill => {
        skills += `<li style="color: #007bff">${skill}</li>`;
    });

    let education = '';
    formData.getAll('education[]').forEach(edu => {
        education += `<li style="color: #007bff">${edu}</li>`;
    });

    let experience = '';
    formData.getAll('experience[]').forEach(exp => {
        experience += `<li style="color: #007bff">${exp}</li>`;
    });

    let projects = '';
    formData.getAll('projects[]').forEach(proj => {
        projects += `<li style="color: #007bff">${proj}</li>`;
    });

    let certifications = '';
    formData.getAll('certifications[]').forEach(cert => {
        certifications += `<li style="color: #007bff">${cert}</li>`;
    });

    let languages = '';
    formData.getAll('languages[]').forEach(lang => {
        languages += `<li style="color: #007bff">${lang}</li>`;
    });

    let references = '';
    formData.getAll('references[]').forEach(ref => {
        references += `<li style="color: #007bff">${ref}</li>`;
    });

    const resumeHTML = `
        <h2 style="color: #007bff">${formData.get('name')}</h2>
        <p style="color: #007bff">${formData.get('contact')}</p>
        <h3 style="color: #007bff">Summary</h3>
        <p style="color: #007bff">${formData.get('summary')}</p>
        <h3 style="color: #007bff">Skills</h3>
        <ul>${skills}</ul>
        <h3 style="color: #007bff">Education</h3>
        <ul>${education}</ul>
        <h3 style="color: #007bff">Experience</h3>
        <ul>${experience}</ul>
        <h3 style="color: #007bff">Projects</h3>
        <ul>${projects}</ul>
        <h3 style="color: #007bff">Certifications</h3>
        <ul>${certifications}</ul>
        <h3 style="color: #007bff">Languages</h3>
        <ul>${languages}</ul>
        <h3 style="color: #007bff">References</h3>
        <ul>${references}</ul>
    `;

    return resumeHTML;
}

function generateClassicPreview(formData) {
    // Implement a different style for classic design
    let skills = '';
    formData.getAll('skills[]').forEach(skill => {
        skills += `<li style="font-weight: bold">${skill}</li>`;
    });

    let education = '';
    formData.getAll('education[]').forEach(edu => {
        education += `<li style="font-weight: bold">${edu}</li>`;
    });

    let experience = '';
    formData.getAll('experience[]').forEach(exp => {
        experience += `<li style="font-weight: bold">${exp}</li>`;
    });

    let projects = '';
    formData.getAll('projects[]').forEach(proj => {
        projects += `<li style="font-weight: bold">${proj}</li>`;
    });

    let certifications = '';
    formData.getAll('certifications[]').forEach(cert => {
        certifications += `<li style="font-weight: bold">${cert}</li>`;
    });

    let languages = '';
    formData.getAll('languages[]').forEach(lang => {
        languages += `<li style="font-weight: bold">${lang}</li>`;
    });

    let references = '';
    formData.getAll('references[]').forEach(ref => {
        references += `<li style="font-weight: bold">${ref}</li>`;
    });

    const resumeHTML = `
        <h2>${formData.get('name')}</h2>
        <p>${formData.get('contact')}</p>
        <h3>Summary</h3>
        <p>${formData.get('summary')}</p>
        <h3>Skills</h3>
        <ul>${skills}</ul>
        <h3>Education</h3>
        <ul>${education}</ul>
        <h3>Experience</h3>
        <ul>${experience}</ul>
        <h3>Projects</h3>
        <ul>${projects}</ul>
        <h3>Certifications</h3>
        <ul>${certifications}</ul>
        <h3>Languages</h3>
        <ul>${languages}</ul>
        <h3>References</h3>
        <ul>${references}</ul>
    `;

    return resumeHTML;
}

function downloadResume(format) {
    const formData = new FormData(document.getElementById('resume-form'));

    let skills = '';
    formData.getAll('skills[]').forEach(skill => {
        skills += `- ${skill}\n`;
    });

    let education = '';
    formData.getAll('education[]').forEach(edu => {
        education += `- ${edu}\n`;
    });

    let experience = '';
    formData.getAll('experience[]').forEach(exp => {
        experience += `- ${exp}\n`;
    });

    let projects = '';
    formData.getAll('projects[]').forEach(proj => {
        projects += `- ${proj}\n`;
    });

    let certifications = '';
    formData.getAll('certifications[]').forEach(cert => {
        certifications += `- ${cert}\n`;
    });

    let languages = '';
    formData.getAll('languages[]').forEach(lang => {
        languages += `- ${lang}\n`;
    });

    let references = '';
    formData.getAll('references[]').forEach(ref => {
        references += `- ${ref}\n`;
    });

    const resumeText = `
        ${formData.get('name')}\n
        ${formData.get('contact')}\n
        \nSummary\n${formData.get('summary')}\n
        \nSkills\n${skills}\n
        \nEducation\n${education}\n
        \nExperience\n${experience}\n
        \nProjects\n${projects}\n
        \nCertifications\n${certifications}\n
        \nLanguages\n${languages}\n
        \nReferences\n${references}\n
    `;

    if (format === 'txt') {
        const blob = new Blob([resumeText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'resume.txt';
        link.click();
    } else if (format === 'pdf') {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text(resumeText, 10, 10);
        doc.save('resume.pdf');
    } else if (format === 'docx') {
        const blob = new Blob([resumeText], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'resume.docx';
        link.click();
    }
}

// Ensure preview is generated on initial load
window.onload = generatePreview;
