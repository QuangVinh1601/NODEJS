import {Router} from 'express'
import path from 'path'; // Add the import statement for the 'path' module
const router = Router()

router.get("/user", (req, res) => {
    // Send the index.html file for the root URL ("/")
    const dirname = path.dirname(new URL(import.meta.url).pathname);
    const indexPath = path.resolve(dirname, "E:/Tamp/SIP_CS2/SIP_CS/src/view/index.html"); // Update the path to the index.html file
    res.sendFile(indexPath);
});
router.get("/employee.html", (req, res) => {
    // Send the index.html file for the root URL ("/")
    const dirname = path.dirname(new URL(import.meta.url).pathname);
    const indexPath = path.resolve(dirname, "E:/Tamp/SIP_CS2/SIP_CS/src/view/employee.html"); // Update the path to the index.html file
    res.sendFile(indexPath);
});

export default router