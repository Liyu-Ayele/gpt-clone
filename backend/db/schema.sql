Create table if not exists conversations (
  id BIGINT UNSIGNED AUTO_INCREMENT primary key,
  role ENUM('user', 'assistant') NOT NULL,
  content TEXT NOT NULL,
  token_count INT UNSIGNED NOT NULL default 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)