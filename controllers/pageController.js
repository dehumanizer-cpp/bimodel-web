export const getHomePage = (req, res) =>{
    res.render("index");
}


export const getBimPage = (req, res) =>{
    res.render("./bim/bim");
}
export const getCadManPage = (req, res) =>{
    res.render("./cad/cad");
}
export const getSoftDevPage = (req, res) =>{
    res.render("./software/software");
}
export const getAboutPage = (req, res) =>{
    res.render("about");
}