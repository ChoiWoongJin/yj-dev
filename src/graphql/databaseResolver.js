import { getDbPeople } from "./databaseConnect";

const resolvers = {
    Query: {
        getDbPeople: () => getDbPeople()
    }
};

export default resolvers;