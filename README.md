## Petful (Server-side)

**API How-to:** Our API functions as a queue, which enables a FIFO (first-in-first-out) functionality. In order to adopt a pet (dequeue it from the queue), create a simple delete request on the API and run the deqeue function from the imported queue class. The page will automatically GET the first pet from each queue (cats & dogs) and display them on a page. This is utilized by calling a .peek() on the queue upon page load and re-render.

**Sample GET request:**

```
catRouter.get('/cats', (req, res) => {
  return res.json(catQueue.peek()); // return the first cat in the array
})
```

Response: Status (200) 
```
{
    "imageURL": "https://static.pexels.com/photos/20787/pexels-photo.jpg",
    "imageDescription": "Grey siamese cat with bright green eyes, looking up to the camera.",
    "name": "Tina",
    "sex": "female",
    "age": 3,
    "breed": "Siamese",
    "story": "Abandoned by previous owner."
}
```

**Sample DELETE request:**

```
catRouter.delete('/cats', (req, res) => {
  return res.json(catQueue.dequeue()); // delete the first cat in the array
})
```

Response: Status (200)
```
{
    "imageURL": "https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg",
    "imageDescription": "Orange bengal cat with black stripes lounging on concrete.",
    "name": "Fluffy",
    "sex": "Female",
    "age": 2,
    "breed": "Bengal",
    "story": "Thrown on the street"
}
```

## Techstack
This project was built using node, express, and a queue DS as our API.
