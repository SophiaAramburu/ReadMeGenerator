const generateMarkdown = ({title, description, installation, usage, license, Git, email, contribution, tests}) => {
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
    
    ${contribution}

    # tests

    ${tests}`;
    
}

module.exports = {
    generateMarkdown,
};
