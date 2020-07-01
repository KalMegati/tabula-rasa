class CreateElements < ActiveRecord::Migration[6.0]
  def change
    create_table :elements do |t|
      t.string :name
      t.string :blurb
      t.belongs_to :character

      t.timestamps
    end
  end
end
