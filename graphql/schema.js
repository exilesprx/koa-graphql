const { buildSchema } = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList} = require('graphql');
const gadgetGraphQLType =  require('./gadgetType');
const Gadget = require('../models/gadget');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      gadget: {
        type: gadgetGraphQLType,
        args: { id: { type: GraphQLString }},
        resolve(parent, args) {
          return Gadget.findById(args.id);
        }
      },
      byCompany: {
        type: new GraphQLList(gadgetGraphQLType),
        args: { name: {type: GraphQLString}},
        resolve(parent, args) {
          return Gadget.find({ by_company: args.name });
        }
      }
    }
  });

  module.exports = new GraphQLSchema({
    query: RootQuery
  });