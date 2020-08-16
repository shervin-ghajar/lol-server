"use strict";
// ----------------------------------------------------------------
import express from 'express';
// ----------------------------------------------------------------
import booksRoutes from './services/books';
// ----------------------------------------------------------------
const booksRouter = () => {
    let router = express()
    // prepare routes
    booksRoutes.prepare(router, "/books")

    return router;
}
// ----------------------------------------------------------------
export default booksRouter