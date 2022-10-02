const generateHTML = ({title, description, installation, usage, license, Git, email, contribution}) => {
    console.log(`# ${title}

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
    
    ${contribution}`);
    
}

module.exports = {
    generateHTML,
};

//   title: 'sfdkj',
//   description: 'dfsdfs',
//   installation: 'fsdf',
//   usage: 'fsd',
//   license: 'The MIT License',
//   Git: 'fsdfs',
//   email: 'sdfsdf',
//   contribution: 'sfdsd'