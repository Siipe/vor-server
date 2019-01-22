CREATE TABLE IF NOT EXISTS user (
  user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  login VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(32) NOT NULL,
  date_creation TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  creator_id INT,

  FOREIGN KEY (creator_id) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS computer (
  computer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  os VARCHAR(100) NOT NULL,
  description TEXT,
  security_key VARCHAR(32) NOT NULL,
  date_creation TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  online BOOLEAN NOT NULL DEFAULT FALSE,

  UNIQUE (name, security_key)
);

CREATE TABLE IF NOT EXISTS action (
  action_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  alias VARCHAR(50) NOT NULL,
  permanent BOOLEAN DEFAULT FALSE,
  type SMALLINT NOT NULL DEFAULT 1,
  date_creation TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  creator_id INT NOT NULL,

  FOREIGN KEY (creator_id) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS computer_action (
  computer_action_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  computer_id INT NOT NULL,
  action_id INT NOT NULL,
  active BOOLEAN NOT NULL DEFAULT FALSE,
  value TEXT,

  FOREIGN KEY (computer_id) REFERENCES computer(computer_id),
  FOREIGN KEY (action_id) REFERENCES action(computer_id)
);

CREATE TABLE IF NOT EXISTS song (
    song_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    size INT NOT NULL,
    creator_id INT NOT NULL,
    date_creation TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (creator_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS plugin (
    plugin_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    creator_id INT NOT NULL,
    date_creation TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (creator_id) REFERENCES users(user_id)
);

INSERT INTO user(name, login, password) VALUES ('Final Blow', 'finalblow', MD5('evilvortex'));