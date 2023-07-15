interface NavItemProps {
   item: any;
   isCta?: boolean;
}

const NavItem = ({ item, isCta }: NavItemProps) => (
   <div className="group relative leading-[1.2] overflow-hidden">
      <span
         className={[
            'mx-2 font-title text-base navbar-item absolute inline-block translate-y-[1.2rem] group-hover:translate-y-0 group-hover:opacity-100 group-hover:rotate-0',
            isCta ? 'text-third' : 'text-light',
         ].join(' ')}
      >
         {item.title}
      </span>
      <span
         className={[
            'mx-2 font-title text-base navbar-item relative inline-block translate-y-0 group-hover:-translate-y-[1.5rem] group-hover:opacity-0 group-hover:rotate-8',
            isCta ? 'text-third' : 'text-light',
         ].join(' ')}
      >
         {item.title}
      </span>
   </div>
);

export default NavItem;
