const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.patch("/items/:id/done", (req, res) => {
    const db = router.db;
    const item = db
        .get("items")
        .find({ id: parseInt(req.params.id) })
        .value();

    if (!item) {
        return res.status(404).json({ error: "Item not found" });
    }

    if (!item.isDone) {
        const updatedItem = { ...item, isDone: true, finishedAt: Date.now() };
        db.get("items")
            .find({ id: parseInt(req.params.id) })
            .assign(updatedItem)
            .write();

        res.json(updatedItem);
    }
});

server.post((req, res, next) => {
    req.body.createdAt = Date.now();
    next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
