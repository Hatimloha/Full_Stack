# Commands:

1. use <database_name> - Switch to the specified database. If the database does not exist, it will be created upon the first write operation.

2. show dbs - List all databases on the MongoDB server.

3. db - Display the current database.

4. db.createCollection(<collection_name>) - Create a new collection in the current database.

5. show collections - List all collections in the current database.

6. db.<collection_name>.drop() - Delete the specified collection from the current database.

7. db.dropDatabase() - Delete the current database.

8. db.<collection_name>.stats() - Display statistics about the specified collection.

9. db.stats() - Display statistics about the current database.

10. db.<collection_name>.renameCollection(<new_collection_name>) - Rename the specified collection to a new name.

11. db.getCollectionNames() - Get an array of all collection names in the current database.

12. db.adminCommand({ping: 1}) - Check the connection to the MongoDB server.

13. db.currentOp() - Display currently running operations on the database server.

14. db.serverStatus() - Display the status of the database server.

15. db.isMaster() - Check if the current server is the primary in a replica set.

16. db.getReplicationInfo() - Get information about the replication status of the database.

17. db.setProfilingLevel(<level>) - Set the profiling level for the current database (0: off, 1: slow operations, 2: all operations).

18. db.getProfilingLevel() - Get the current profiling level for the database.

19. db.collectionName.getIndexes() - List all indexes on the specified collection.

20. db.collectionName.createIndex({<field>: 1}) - Create an index on the specified field in the collection (1 for ascending, -1 for descending).

21. db.collectionName.dropIndex(<index_name>) - Delete the specified index from the collection.

22. db.collectionName.reIndex() - Rebuild all indexes on the specified collection.

23. db.collectionName.validate() - Validate the specified collection to check for errors.

24. db.collectionName.aggregate([<pipeline>]) - Perform an aggregation operation on the specified collection using the provided pipeline stages.

25. db.collectionName.explain(<operation>) - Provide execution statistics for the specified operation on the collection.

> These commands help you manage databases and collections in MongoDB effectively.