import { NOTIFICATION_TYPES } from "./concerns/notification-types";

export default {
  "site.json": {
    site: {
      default_archetype: "regular",
      shared_drafts_category_id: 24,
      notification_types: NOTIFICATION_TYPES,
      post_types: {
        regular: 1,
        moderator_action: 2,
        small_action: 3,
        whisper: 4,
      },
      trust_levels: {
        newuser: 0,
        basic: 1,
        member: 2,
        regular: 3,
        leader: 4,
      },
      groups: [
        { id: 0, name: "everyone" },
        { id: 1, name: "admins" },
        { id: 2, name: "moderators" },
        { id: 3, name: "staff" },
        { id: 4, name: "custom_group" },
        { id: 10, name: "trust_level_0" },
        { id: 11, name: "trust_level_1" },
        { id: 12, name: "trust_level_2" },
        { id: 13, name: "trust_level_3" },
        { id: 14, name: "trust_level_4" },
      ],
      filters: [
        "latest",
        "unread",
        "new",
        "top",
        "starred",
        "read",
        "posted",
        "search",
        "bookmarks",
        "hot",
        "unseen"
      ],
      periods: ["all", "yearly", "quarterly", "monthly", "weekly", "daily"],
      top_menu_items: [
        "latest",
        "unread",
        "new",
        "starred",
        "read",
        "posted",
        "categories",
        "hot",
        "bookmarks",
        "unseen",
      ],
      anonymous_top_menu_items: ["latest", "hot", "categories"],
      uncategorized_category_id: 17,
      is_readonly: false,
      categories: [
        {
          id: 3,
          name: "meta",
          color: "aaaaaa",
          text_color: "FFFFFF",
          slug: "meta",
          topic_count: 122,
          post_count: 1023,
          description:
            "Discussion about meta.discourse.org itself, the organization of this forum about Discourse, how it works, and how we can improve this site.",
          description_text:
            "Discussion about meta.discourse.org itself, the organization of this forum about Discourse, how it works, and how we can improve this site.",
          topic_url: "/t/category-definition-for-meta/24",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          background_url: null,
          show_subcategory_list: false,
          default_view: "latest",
          topic_template: "my topic template",
        },
        {
          id: 10,
          name: "howto",
          color: "76923C",
          text_color: "FFFFFF",
          slug: "howto",
          topic_count: 72,
          post_count: 1022,
          description:
            "Tutorial topics that describe how to set up, configure, or install Discourse using a specific platform or environment. Topics in this category may only be created by trust level 2 and up. ",
          description_text:
            "Tutorial topics that describe how to set up, configure, or install Discourse using a specific platform or environment. Topics in this category may only be created by trust level 2 and up. ",
          topic_url: "/t/category-definition-for-howto/2629",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          background_url: null,
          show_subcategory_list: false,
          default_view: "latest",
        },
        {
          id: 26,
          name: "spec",
          color: "33B0B0",
          text_color: "FFFFFF",
          slug: "spec",
          topic_count: 20,
          post_count: 278,
          description:
            "My idea here is to have mini specs for features we would like built but have no bandwidth to build",
          description_text:
            "My idea here is to have mini specs for features we would like built but have no bandwidth to build",
          topic_url: "/t/about-the-spec-category/13965",
          read_restricted: false,
          permission: 1,
          parent_category_id: 2,
          notification_level: null,
          background_url: null,
        },
        {
          id: 7,
          name: "dev",
          color: "000",
          text_color: "FFFFFF",
          slug: "dev",
          topic_count: 481,
          post_count: 3575,
          description:
            "This category is for topics related to hacking on Discourse: submitting pull requests, configuring development environments, coding conventions, and so forth.",
          description_text:
            "This category is for topics related to hacking on Discourse: submitting pull requests, configuring development environments, coding conventions, and so forth.",
          topic_url: "/t/category-definition-for-dev/1026",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          background_url: null,
          show_subcategory_list: true,
          default_view: "latest",
          subcategory_list_style: "boxes_with_featured_topics",
          has_children: true,
        },
        {
          id: 6,
          name: "support",
          color: "b99",
          text_color: "FFFFFF",
          slug: "support",
          topic_count: 1603,
          post_count: 11075,
          description:
            "Support on configuring, using, and installing Discourse. Not for software development related topics, but for admins and end users configuring and using Discourse.",
          description_text:
            "Support on configuring, using, and installing Discourse. Not for software development related topics, but for admins and end users configuring and using Discourse.",
          topic_url: "/t/category-definition-for-support/389",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          background_url: null,
          show_subcategory_list: false,
          default_view: "latest",
          has_children: true,
        },
        {
          id: 24,
          name: "Shared Drafts",
          color: "92278F",
          text_color: "FFFFFF",
          slug: "shared-drafts",
          topic_count: 13,
          post_count: 53,
          description: "An area for staff members to post shared drafts",
          description_text: "An area for staff members to post shared drafts",
          topic_url: "/t/about-the-shared-drafts-category/13110",
          read_restricted: true,
          permission: 1,
          notification_level: null,
          background_url: null,
        },
        {
          id: 28,
          name: "hack night",
          color: "B3B5B4",
          text_color: "FFFFFF",
          slug: "hack-night",
          topic_count: 8,
          post_count: 33,
          description:
            'This is a special, temporary category to organize work on the <a href="http://www.meetup.com/torontoruby/events/192168702/">Discourse Hack Night</a> in Toronto. ',
          description_text:
            "This is a special, temporary category to organize work on the Discourse Hack Night in Toronto.",
          topic_url: "/t/about-the-hack-night-category/17878",
          read_restricted: false,
          permission: 1,
          parent_category_id: 7,
          notification_level: null,
          background_url: null,
        },
        {
          id: 27,
          name: "translations",
          color: "27AA5B",
          text_color: "FFFFFF",
          slug: "translations",
          topic_count: 95,
          post_count: 827,
          description:
            "This category is for discussion about localizing Discourse.",
          description_text:
            "This category is for discussion about localizing Discourse.",
          topic_url: "/t/about-the-translations-category/14549",
          read_restricted: false,
          permission: 1,
          parent_category_id: 7,
          notification_level: null,
          background_url: null,
        },
        {
          id: 4,
          name: "faq",
          color: "33b",
          text_color: "FFFFFF",
          slug: "faq",
          topic_count: 48,
          post_count: 501,
          description:
            "Topics that come up very often when discussing Discourse will eventually be classified into this Frequently Asked Questions category. Should only be added to popular topics.",
          description_text:
            "Topics that come up very often when discussing Discourse will eventually be classified into this Frequently Asked Questions category. Should only be added to popular topics.",
          topic_url: "/t/category-definition-for-faq/25",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          background_url: null,
          show_subcategory_list: false,
          default_view: "latest",
        },
        {
          id: 14,
          name: "marketplace",
          color: "8C6238",
          text_color: "FFFFFF",
          slug: "marketplace",
          topic_count: 66,
          post_count: 361,
          description:
            "About commercial Discourse related stuff: jobs or paid gigs, plugins, themes, hosting, etc.",
          description_text:
            "About commercial Discourse related stuff: jobs or paid gigs, plugins, themes, hosting, etc.",
          topic_url: "/t/category-definition-for-marketplace/5425",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          background_url: null,
          show_subcategory_list: false,
          default_view: "latest",
        },
        {
          id: 12,
          name: "discourse hub",
          color: "b2c79f",
          text_color: "FFFFFF",
          slug: "discourse-hub",
          topic_count: 10,
          post_count: 164,
          description:
            "Topics about current or future Discourse Hub functionality at discourse.org including nickname registration, global user pages, and the site directory.",
          description_text:
            "Topics about current or future Discourse Hub functionality at discourse.org including nickname registration, global user pages, and the site directory.",
          topic_url: "/t/category-definition-for-discourse-hub/3038",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          show_subcategory_list: false,
          default_view: "latest",
        },
        {
          id: 13,
          name: "blog",
          color: "ED207B",
          text_color: "FFFFFF",
          slug: "blog",
          topic_count: 22,
          post_count: 390,
          description:
            "Discussion topics generated from the official Discourse Blog. These topics are linked from the bottom of each blog entry where the blog comments would normally be.",
          description_text:
            "Discussion topics generated from the official Discourse Blog. These topics are linked from the bottom of each blog entry where the blog comments would normally be.",
          topic_url: "/t/category-definition-for-blog/5250",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          show_subcategory_list: false,
          default_view: "latest",
        },
        {
          id: 5,
          name: "extensibility",
          color: "FE8432",
          text_color: "FFFFFF",
          slug: "extensibility",
          topic_count: 226,
          post_count: 1874,
          description:
            "Topics about extending the functionality of Discourse with plugins, themes, add-ons, or other mechanisms for extensibility.  ",
          description_text:
            "Topics about extending the functionality of Discourse with plugins, themes, add-ons, or other mechanisms for extensibility.  ",
          topic_url: "/t/about-the-extensibility-category/28",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          show_subcategory_list: false,
          default_view: "latest",
          has_children: true,
        },
        {
          id: 11,
          name: "login",
          color: "edb400",
          text_color: "FFFFFF",
          slug: "login",
          topic_count: 48,
          post_count: 357,
          description:
            "Topics about logging in to Discourse, using any standard third party provider (Twitter, Facebook, Google), traditional username and password, or with a custom plugin.",
          description_text:
            "Topics about logging in to Discourse, using any standard third party provider (Twitter, Facebook, Google), traditional username and password, or with a custom plugin.",
          topic_url: "/t/category-definition-for-login/2828",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          show_subcategory_list: false,
          default_view: "latest",
        },
        {
          id: 22,
          name: "plugin",
          color: "d47711",
          text_color: "FFFFFF",
          slug: "plugin",
          topic_count: 40,
          post_count: 466,
          description:
            "One post per plugin! Only plugin owners should post here. ",
          description_text:
            "One post per plugin! Only plugin owners should post here. ",
          topic_url: "/t/about-the-plugin-category/12648",
          read_restricted: false,
          permission: 1,
          parent_category_id: 5,
          notification_level: null,
        },
        {
          id: 1,
          name: "bug",
          color: "e9dd00",
          text_color: "000000",
          slug: "bug",
          topic_count: 1469,
          post_count: 9295,
          description:
            "A bug report means something is broken, preventing normal/typical use of Discourse. Do be sure to search prior to submitting bugs. Include repro steps, and only describe one bug per topic please.",
          description_text:
            "A bug report means something is broken, preventing normal/typical use of Discourse. Do be sure to search prior to submitting bugs. Include repro steps, and only describe one bug per topic please.",
          topic_url: "/t/category-definition-for-bug/2",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          can_edit: true,
          show_subcategory_list: false,
          default_view: "latest",
          required_tag_groups: [],
        },
        {
          id: 17,
          name: "uncategorized",
          color: "0088CC",
          text_color: "FFFFFF",
          slug: "uncategorized",
          topic_count: 342,
          post_count: 3090,
          description:
            "Topics that don't need a category, or don't fit into any other existing category.",
          description_text:
            "Topics that don't need a category, or don't fit into any other existing category.",
          topic_url: null,
          read_restricted: false,
          permission: 1,
          notification_level: null,
          show_subcategory_list: false,
          default_view: "latest",
        },
        {
          id: 21,
          name: "wordpress",
          color: "1E8CBE",
          text_color: "FFFFFF",
          slug: "wordpress",
          topic_count: 26,
          post_count: 135,
          description:
            'Support for the official Discourse WordPress plugin at <a href="https://github.com/discourse/wp-discourse">https://github.com/discourse/wp-discourse</a>',
          description_text:
            "Support for the official Discourse WordPress plugin at https://github.com/discourse/wp-discourse",
          topic_url: "/t/category-definition-for-wordpress/12282",
          read_restricted: false,
          permission: 1,
          parent_category_id: 6,
          notification_level: null,
        },
        {
          id: 8,
          name: "hosting",
          color: "74CCED",
          text_color: "FFFFFF",
          slug: "hosting",
          topic_count: 100,
          post_count: 917,
          description:
            "Topics about hosting Discourse, either on your own servers, in the cloud, or with specific hosting services.",
          description_text:
            "Topics about hosting Discourse, either on your own servers, in the cloud, or with specific hosting services.",
          topic_url: "/t/category-definition-for-hosting/2626",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          show_subcategory_list: false,
          default_view: "latest",
        },
        {
          id: 9,
          name: "ux",
          color: "5F497A",
          text_color: "FFFFFF",
          slug: "ux",
          topic_count: 452,
          post_count: 4472,
          description:
            "Discussion about the user interface of Discourse, how features are presented to the user in the client, including language and UI elements.",
          description_text:
            "Discussion about the user interface of Discourse, how features are presented to the user in the client, including language and UI elements.",
          topic_url: "/t/category-definition-for-ux/2628",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          show_subcategory_list: false,
          default_view: "latest",
        },
        {
          id: 2,
          name: "feature",
          color: "0E76BD",
          text_color: "FFFFFF",
          slug: "feature",
          topic_count: 1367,
          post_count: 11942,
          description:
            "Discussion about features or potential features of Discourse: how they work, why they work, etc.",
          description_text:
            "Discussion about features or potential features of Discourse: how they work, why they work, etc.",
          topic_url: "/t/category-definition-for-feature/11",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          show_subcategory_list: true,
          default_view: "latest",
          subcategory_list_style: "boxes",
          default_list_filter: "all",
          has_children: true,
        },
        {
          id: 240,
          name: "快乐的",
          color: "0E78BD",
          text_color: "FFFFFF",
          slug: "",
          topic_count: 137,
          post_count: 1142,
          description: "关于幸福的讨论",
          description_text: "关于幸福的讨论",
          topic_url: "/t/category-definition-for-快乐的/11",
          read_restricted: false,
          permission: 1,
          notification_level: null,
          show_subcategory_list: true,
          default_view: "latest",
          subcategory_list_style: "boxes",
        },
        {
          id: 2481,
          name: "Restricted Group",
          color: "0E78BD",
          text_color: "FFFFFF",
          slug: "restricted-group",
          topic_count: 137,
          post_count: 1142,
          description: "A restricted group",
          description_text: "A restricted group",
          topic_url: "/t/category-definition-for-restricted-group/11",
          read_restricted: true,
          permission: 1,
          notification_level: null,
          show_subcategory_list: true,
          default_view: "latest",
          subcategory_list_style: "boxes",
        },
        {
          id: 1001,
          name: "Parent Category",
          color: "27AA5B",
          text_color: "FFFFFF",
          slug: "parent-category",
          topic_count: 95,
          post_count: 827,
          description: "some description",
          description_text: "some description",
          topic_url: "/t/some-url",
          read_restricted: false,
          permission: 1,
          parent_category_id: null,
          notification_level: null,
          background_url: null,
          has_children: true,
          subcategory_count: 2,
        },
        {
          id: 1002,
          name: "Sub Category",
          color: "27AA5B",
          text_color: "FFFFFF",
          slug: "sub-category",
          topic_count: 95,
          post_count: 827,
          description: "some description",
          description_text: "some description",
          topic_url: "/t/some-url",
          read_restricted: false,
          permission: 1,
          parent_category_id: 1001,
          notification_level: null,
          background_url: null,
          has_children: true,
        },
        {
          id: 1003,
          name: "Sub Sub Category",
          color: "27AA5B",
          text_color: "FFFFFF",
          slug: "sub-sub-category",
          topic_count: 95,
          post_count: 827,
          description: "some description",
          description_text: "some description",
          topic_url: "/t/some-url",
          read_restricted: false,
          permission: 1,
          parent_category_id: 1002,
          notification_level: null,
          background_url: null,
        },
      ],
      post_action_types: [
        {
          name_key: "bookmark",
          name: "Bookmark",
          description: "Bookmark this post",
          short_description: "Bookmark this post",
          is_flag: false,
          icon: null,
          id: 1,
          require_message: false,
        },
        {
          name_key: "like",
          name: "Like",
          description: "Like this post",
          short_description: "Like this post",
          is_flag: false,
          icon: "heart",
          id: 2,
          require_message: false,
        },
        {
          name_key: "off_topic",
          name: "Off-Topic",
          description:
            "This post is radically off-topic in the current topic, and should probably be moved. If this is a topic, perhaps it does not belong here.",
          short_description: "Not relevant to the discussion",
          is_flag: true,
          icon: null,
          id: 3,
          require_message: false,
          enabled: true,
          applies_to: ["Post", "Chat::Message"]
        },
        {
          name_key: "inappropriate",
          name: "Inappropriate",
          description:
            'This post contains content that a reasonable person would consider offensive, abusive, or a violation of <a href="/guidelines">our community guidelines</a>.',
          short_description:
            'A violation of <a href="/guidelines">our community guidelines</a>',
          is_flag: true,
          icon: null,
          id: 4,
          require_message: false,
          enabled: true,
          applies_to: ["Post", "Topic", "Chat::Message"]
        },
        {
          name_key: "vote",
          name: "Vote",
          description: "Vote for this post",
          short_description: "Vote for this post",
          is_flag: false,
          icon: null,
          id: 5,
          require_message: false,
          enabled: true
        },
        {
          name_key: "spam",
          name: "Spam",
          description:
            "This post is an advertisement. It is not useful or relevant to the current topic, but promotional in nature.",
          short_description: "This is an advertisement",
          is_flag: true,
          icon: null,
          id: 8,
          require_message: false,
          enabled: true,
          applies_to: ["Post", "Topic", "Chat::Message"]
        },
        {
          name_key: "notify_user",
          name: "Notify %{username}",
          description:
            "This post contains something I want to talk to this person directly and privately about. Does not cast a flag.",
          short_description:
            "I want to talk to this person directly and privately about their post.",
          is_flag: true,
          icon: null,
          id: 6,
          require_message: true,
          enabled: true,
          applies_to: ["Post", "Topic", "Chat::Message"]
        },
        {
          name_key: "notify_moderators",
          name: "Notify moderators",
          description:
            'This post requires general moderator attention based on the <a href="/guidelines">guidelines</a>, <a href="/tos">TOS</a>, or for another reason not listed above.',
          short_description: "Requires staff attention for another reason",
          is_flag: true,
          icon: null,
          id: 7,
          require_message: true,
          enabled: true,
          applies_to: ["Post", "Topic", "Chat::Message"]
        },
      ],
      topic_flag_types: [
        {
          name_key: "inappropriate",
          name: "Inappropriate",
          description:
            'This topic contains content that a reasonable person would consider offensive, abusive, or a violation of <a href="/guidelines">our community guidelines</a>.',
          is_flag: true,
          icon: null,
          id: 4,
          require_message: false,
          enabled: true,
          applies_to: ["Post", "Topic", "Chat::Message"]
        },
        {
          name_key: "spam",
          name: "Spam",
          description:
            "This topic is an advertisement. It is not useful or relevant to this site, but promotional in nature.",
          is_flag: true,
          icon: null,
          id: 8,
          require_message: false,
          enabled: true,
          applies_to: ["Post", "Topic", "Chat::Message"]
        },
        {
          name_key: "notify_moderators",
          name: "Notify moderators",
          description:
            'This topic requires general moderator attention based on the <a href="/guidelines">guidelines</a>, <a href="/tos">TOS</a>, or for another reason not listed above.',
          is_flag: true,
          icon: null,
          id: 7,
          require_message: true,
          enabled: true,
          applies_to: ["Post", "Topic", "Chat::Message"]
        },
      ],
      archetypes: [
        {
          id: "regular",
          name: "Regular Topic",
          options: [],
        },
        {
          id: "banner",
          name: "translation missing: en.archetypes.banner.title",
          options: [],
        },
      ],
      auth_providers: [
        {
          name: "facebook",
          custom_url: null,
          pretty_name_override: null,
          title_override: null,
          frame_width: 580,
          frame_height: 400,
          can_connect: true,
          can_revoke: true,
        },
      ],
      displayed_about_plugin_stat_groups: ["chat_messages"],
      hashtag_configurations: { "topic-composer": ["category", "tag"] },
      hashtag_icons: { "category": "folder", "tag": "tag" },
      anonymous_sidebar_sections: [
        {
          id: 111,
          title: "Community",
          links: [
            {
              id: 329,
              name: "Topics",
              value: "/latest",
              icon: "layer-group",
              external: false,
              segment: "primary",
            },
            {
              id: 330,
              name: "Users",
              value: "/u",
              icon: "users",
              external: false,
              segment: "secondary",
            },
            {
              id: 331,
              name: "About",
              value: "/about",
              icon: "info-circle",
              external: false,
              segment: "secondary",
            },
            {
              id: 332,
              name: "Faq",
              value: "/faq",
              icon: "question-circle",
              external: false,
              segment: "secondary",
            },
            {
              id: 333,
              name: "My Posts",
              value: "/my/activity",
              icon: "user",
              external: false,
              segment: "primary",
            },
            {
              id: 334,
              name: "Review",
              value: "/review",
              icon: "flag",
              external: false,
              segment: "secondary",
            },
            {
              id: 335,
              name: "Admin",
              value: "/admin",
              icon: "wrench",
              external: false,
              segment: "primary",
            },
            {
              id: 336,
              name: "Groups",
              value: "/g",
              icon: "user-friends",
              external: false,
              segment: "secondary",
            },
            {
              id: 337,
              name: "Badges",
              value: "/badges",
              icon: "certificate",
              external: false,
              segment: "secondary",
            },
          ],
          slug: "community",
          public: true,
          section_type: "community",
        },
      ],
    },
  },
};
