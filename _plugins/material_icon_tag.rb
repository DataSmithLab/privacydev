module Jekyll
  class MaterialIconTag < Liquid::Tag
    def initialize(tag_name, input, tokens)
      super
      @input = input.strip
    end

    def render(context)
      if @input =~ /^([a-z0-9\-]+)(\s+([a-z\-]+))?$/
        icon_name = $1
        icon_class = $3 || ""
        
        # Generate HTML for the icon
        "<i class=\"mdi mdi-#{icon_name} #{icon_class}\"></i>"
      else
        "Error: Invalid material icon format"
      end
    end
  end
end

Liquid::Template.register_tag('material', Jekyll::MaterialIconTag) 