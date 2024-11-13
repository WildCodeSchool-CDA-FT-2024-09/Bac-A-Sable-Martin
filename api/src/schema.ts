import { buildSchema } from "type-graphql";
import RepoResolver from "./resolvers/repo.resolver";

const getSchema = async () => {
  return await buildSchema({
    resolvers: [RepoResolver],
  });
};

export default getSchema;
