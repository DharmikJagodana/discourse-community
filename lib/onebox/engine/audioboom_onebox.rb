module Onebox
  module Engine
    class AudioboomOnebox
      include Engine
      include StandardEmbed

      matches_regexp(/^https?:\/\/audioboom\.com\/posts\/\d+/)
      always_https

      def placeholder_html
        oembed = get_oembed

        # we want the image to have the same dimensions as the embedded html

        <<-HTML
          <img src="#{oembed[:thumbnail_url]}" style="max-width: #{oembed[:width]}px; max-height: #{oembed[:height]}px;">
        HTML
      end

      def to_html
        oembed = get_oembed
        oembed[:html]
      end

    end
  end
end
