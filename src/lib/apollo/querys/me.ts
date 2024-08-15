import { gql } from "@apollo/client";

export const meQuery = gql`
  query Me {
    me {
      _id
      name
      username
      email
      profile_image {
        _id
        asset_id
        public_id
        format
        resource_type
        bytes
        url
        secure_url
        folder
        original_filename
      }
      birth_date
      role
      following {
        _id
      }
      followers {
        _id
      }
    }
  }
`;
