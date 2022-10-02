const generateMarkdown = ({title, description, installation, usage, license, Git, email, contribution}) => {
    return `# ${title}

    # description
    
    ${description}
    
    # installation
    
    ${installation}
    
    # usage
    
    ${usage}
    
    # license
    
    ${license}
    
    # Git
    
    ${Git}
    
    # email
    
    ${email}
    
    # contribution
    
    ${contribution}`;
    
}

module.exports = {
    generateMarkdown,
};
