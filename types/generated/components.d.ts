import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    ogTitle: Schema.Attribute.String;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
  };
}

export interface ComponentsStringList extends Struct.ComponentSchema {
  collectionName: 'components_components_string_lists';
  info: {
    displayName: 'StringList';
  };
  attributes: {
    keyword: Schema.Attribute.String;
  };
}

export interface ComponentsMultiText extends Struct.ComponentSchema {
  collectionName: 'components_components_multi_texts';
  info: {
    displayName: 'Multi text';
  };
  attributes: {
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F'>;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430'>;
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
  };
}

export interface ComponentsImageTitle extends Struct.ComponentSchema {
  collectionName: 'components_components_image_titles';
  info: {
    displayName: 'image + title';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u0430'>;
  };
}

export interface ComponentsCard extends Struct.ComponentSchema {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438'>;
    description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0443\u0441\u043B\u0443\u0433\u0438'>;
    price: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u0426\u0435\u043D\u0430'>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsBlocks extends Struct.ComponentSchema {
  collectionName: 'components_components_blocks';
  info: {
    displayName: 'blocks';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'+71231231212'>;
  };
}

export interface ComponentsAccardion extends Struct.ComponentSchema {
  collectionName: 'components_components_accardions';
  info: {
    displayName: 'Accardion';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    duration: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'20 \u043C\u0438\u043D\u0443\u0442'>;
    coast: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E'>;
    what_is_it_for: Schema.Attribute.Component<'components.multi-text', true> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'\u041A\u043E\u043C\u0443 \u043F\u043E\u0434\u043E\u0439\u0434\u0435\u0442:'>;
  };
}

export interface BlocksSliderBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_slider_blocks';
  info: {
    displayName: 'Slider_block';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041E\u0411\u041E \u041C\u041D\u0415'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    is_slider_left: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    images: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    is_send_request_btn: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    description: Schema.Attribute.Text;
  };
}

export interface BlocksBlock3 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_3s';
  info: {
    displayName: 'Line_block';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    button_text: Schema.Attribute.String;
  };
}

export interface BlocksBlock2 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_2s';
  info: {
    displayName: 'Card_block';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0435\u043A\u0446\u0438\u0438'>;
    services: Schema.Attribute.Component<'components.accardion', true> &
      Schema.Attribute.Required;
  };
}

export interface BlocksBlock1 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_1s';
  info: {
    displayName: 'Main_block';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041A\u041E\u041D\u0421\u0423\u041B\u042C\u0422\u0410\u0426\u0418\u042F \u041F\u0421\u0418\u0425\u041E\u041B\u041E\u0413\u0410'>;
    your_name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u041E\u043A\u0441\u0430\u043D\u0430 \u041A\u0440\u0438\u0432\u0446\u043E\u0432\u0430'>;
    photo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    bg_color: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#8E5800'>;
    skils: Schema.Attribute.Component<'components.image-title', true>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'main'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.seo': SharedSeo;
      'components.string-list': ComponentsStringList;
      'components.multi-text': ComponentsMultiText;
      'components.link': ComponentsLink;
      'components.image-title': ComponentsImageTitle;
      'components.card': ComponentsCard;
      'components.blocks': ComponentsBlocks;
      'components.accardion': ComponentsAccardion;
      'blocks.slider-block': BlocksSliderBlock;
      'blocks.block-3': BlocksBlock3;
      'blocks.block-2': BlocksBlock2;
      'blocks.block-1': BlocksBlock1;
    }
  }
}
