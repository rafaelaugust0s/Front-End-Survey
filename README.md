# Front-End-Survey
 DEPLOY LINK https://front-end-survey-2qwi1ifaa-rafaelaugust0s.vercel.app/
 
 CREATE http://localhost:3000/

 SHOW BY ID http://localhost:3000/MyForm

 UPDATE / DELETE http://localhost:3000/update



GET router.get('/', CustomerController.index)
STORE router.post('/', CustomerController.store)
SHOW by ID router.get('/:customer_id', CustomerController.show)
EDIT router.patch('/:customer_id', CustomerController.update)
DELETE router.delete('/:customer_id',CustomerController.deleteCustomer)



