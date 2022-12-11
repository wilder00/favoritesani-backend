const {request, response} = require('express')

const getPackageVersion = async (req, res = response) =>{
  const packageVersion = process.env.npm_package_version

  try {
    res.json({
      success: true,
      version: packageVersion,
      message: "Versión presente en package.json que representa la versión actual del proyecto."
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Ocurrió un error en package version",
      error
    })
  }

}


module.exports = {
  getPackageVersion
}