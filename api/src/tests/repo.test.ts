import getSchema from "../schema";
import { graphql, GraphQLSchema, print } from "graphql";
import gql from "graphql-tag";

const GET_REPOS = gql`
  query Getrepos {
    getrepos {
      id
      name
      url
      isFavorite
      status
    }
  }
`;

describe("Repo resolver", () => {
  let schema: GraphQLSchema;

  beforeAll(async () => {
    schema = await getSchema();
  });

  it("get repos", async () => {
    const result = (await graphql({
      schema: schema,
      source: print(GET_REPOS),
    })) as { data: { getrepos: Array<unknown> } };
    console.log(result);

    // Vérification que la réponse est au format tableau
    expect(result.data.getrepos).toEqual(expect.any(Array));
  });
});
