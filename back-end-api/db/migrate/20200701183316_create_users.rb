class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :handle
      t.string :password_digest
      t.string :icon
      t.string :style, :default => "cerulean"

      t.timestamps
    end
  end
end
