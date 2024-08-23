import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { OrdersService } from './orders/orders.service';
import { OrdersModule } from './orders/orders.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, ProductsModule, OrdersModule, AuthModule],
  controllers: [AppController, UsersController, ProductsController, AuthController],
  providers: [AppService, OrdersService, AuthService],
})
export class AppModule {}
