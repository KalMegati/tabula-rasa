class CreateElements < ActiveRecord::Migration[6.0]
  def change
    create_table :elements do |t|
      t.string :icon1
      t.string :icon2
      t.string :icon3
      t.string :label1
      t.string :label2
      t.string :label3
      t.text :text1
      t.text :text2
      t.text :text3
      t.string :active
      t.belongs_to :character

      t.timestamps
    end
  end
end
