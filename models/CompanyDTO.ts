interface CompanyDTO {
  id: number;
  logo: string;
  background: string;
  title_ir: string;
  title_en: string;
  slug: string;
  links: CompanyLink[];
}

interface CompanyLink {
  id: number;
  company: number;
  url: string;
  title: string;
  title_color: string;
  title_color_hover: string;
  background_color: string;
  background_color_hover: string;
  icon: string;
  icon_size: number;
  icon_color: string;
  icon_color_hover: string;
}
