type User = {
   social: {
      facebook: string;
      linkedIn: string;
   };
};
export type Profile = Pick<
   User,
   'name' | 'image' | 'description' | 'background_color'
>;
