import API from "../API/documentCategory"

/**
 * acuitydrive uploader[uploads file to the cloud]
 * @param {*} fileList 
 */
function upload(fileList) {
  const filesIndex = Array.from(Array(fileList.length).keys())

    const promises = filesIndex.map(index => {
      const formData = new FormData();
      formData.append("file", fileList[index], fileList[index].name);
      const file = formData.getAll('file')[0]

      return API.uploadFile(formData)
        .then((res) => {
            return (res.error === null)
            ? {"code":res.code, "data":file, "error": res.error, "message":res.message, "formData":formData}
            : {"code":503, "data":file, "debug": res, "formData":formData}
        })
        .catch(e => { 
            return (e.error === true)
            ? {"code":503,"data":file,"debug":e.debug, "formData":formData}
            : {"code":200, "data":file, "debug": e, "formData":formData}
        })
    })

    return Promise.all(promises)
      .then((res) => res )
      .catch((err) => err )
}

/**
 * saving file details
 * @param {*} imageProps
 */
function saveDocument(imageProps){
  const saveFile = () => {
    return API.saveFileDetails(imageProps)
      .then(res => {
          return {"code":200, "data":res}
      })
      .catch(err => {
          return {"code":500, "debug":err}
      })
  }

  return saveFile()
}


/**
 * Retrying failed uploads
 * @param {*} failedUploads 
 */
function Retry(failedUploads) {

    const promises = failedUploads.map(failed => {
        const formData = failed.formData
        const file = formData.getAll('file')[0]

        return API.uploadFile(formData)
            .then((res) => {
                return (res.error === null)
                ? {"code":res.code, "data":file, "error": res.error, "message":res.message, "formData":formData}
                : {"code":503, "data":file, "debug": res, "formData":formData}
            })
            .catch(e => { 
                return (e.error === true)
                ? {"code":503,"data":file,"debug":e.debug, "formData":formData}
                : {"code":200, "data":file, "debug": e, "formData":formData}
            })
    })  

    return Promise.all(promises)
        .then((res) => res )
        .catch((err) => err )
}

/**
 * Export Acuity Drive 
 */
export const acuitydrive = {
    "upload":upload,
    "saveDocument":saveDocument,
    "Retry":Retry 
}